fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load repositories: HTTP ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!Array.isArray(events)) {
      throw new Error("Repository data must be a list.");
    }

    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });

    document.querySelector("#status").textContent =
      events.length === 0 ? "No starred repositories found." : "";
  })
  .catch((error) => {
    document.querySelector("#status").textContent =
      "Could not load starred repositories. Please try again later.";
    console.error("Failed to load starred repositories:", error);
  });
