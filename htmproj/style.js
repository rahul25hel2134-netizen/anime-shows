<script>
  // Load saved shows or start empty
  let shows = JSON.parse(localStorage.getItem('shows')) || [];

  // Function to display shows in their categories
  function renderShows() {
    const watchingDiv = document.getElementById('watching');
    const completedDiv = document.getElementById('completed');
    const planDiv = document.getElementById('plan');

    // Clear old lists
    watchingDiv.innerHTML = '';
    completedDiv.innerHTML = '';
    planDiv.innerHTML = '';

    // Loop through all shows
    shows.forEach((show, index) => {
      const showHTML = `
        <div class="show" style="background-color: ${
          show.status === 'Watching' ? '#d1e7dd' :
          show.status === 'Completed' ? '#cff4fc' :
          '#fff3cd'
        };">
          <b>${show.title}</b> - ${show.status}
          <button onclick="removeShow(${index})">Remove</button>
        </div>
      `;

      // Sort into sections based on status
      if (show.status === 'Watching') watchingDiv.innerHTML += showHTML;
      else if (show.status === 'Completed') completedDiv.innerHTML += showHTML;
      else planDiv.innerHTML += showHTML;
    });
  }

  // Add a new show
  function addShow() {
    const title = document.getElementById('title').value;
    const status = document.getElementById('status').value;
    if (title.trim() === '') return alert('Enter a show title!');
    shows.push({ title, status });
    localStorage.setItem('shows', JSON.stringify(shows));
    document.getElementById('title').value = '';
    renderShows();
  }

  // Remove a specific show
  function removeShow(index) {
    shows.splice(index, 1);
    localStorage.setItem('shows', JSON.stringify(shows));
    renderShows();
  }

  // Clear all shows at once
  function clearAll() {
    if (confirm('Are you sure you want to clear your entire watchlist?')) {
      shows = [];
      localStorage.removeItem('shows');
      renderShows();
    }
  }

  // Render everything when the page loads
  renderShows();
</script>
/*function clearAll() {
  if (confirm('Are you sure you want to clear your entire watchlist?')) {
    shows = [];
    localStorage.removeItem('shows');
    renderShows();
  }
}
list.innerHTML += `
  <div class="show" style="background-color: ${
    show.status === 'Watching' ? '#d1e7dd' :
    show.status === 'Completed' ? '#cff4fc' :
    '#fff3cd'
  };">
    <b>${show.title}</b> - ${show.status}
    <button onclick="removeShow(${index})">Remove</button>
  </div>
`;*/