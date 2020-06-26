function search() {
  let query = document.getElementById("search-input").value;
  window.location.href = "/search/" + query;
}

function appendResult (title, description, link) {
  const dom = document.getElementById("results");
  dom.innerHTML = dom.innerHTML + `
    <div class="result">
      <span href="${link}" class="result-title" href="${link}"><div class="web-badges">${getBadges(link)}</div> ${title}</span>
      <a class="result-url" href="${link}">${link}</a>
      <p class="result-description">${description}</p>
    </div>
`;
}

function getBadges (url) {
  let badges = "";
  
  if (url.startsWith("https://"))
    badges = badges + '<img class="badge" src="https://cdn.glitch.com/b52b37d1-91cc-47b8-8606-b516f0e7310c%2F102-1020750_file-move-protect-svg-green-padlock-icon-ssl.png?v=1593137781975"></img>';
  
  return badges;
}
      
function initSearch (search_query) {
  var callback = (response) => {
    response = JSON.parse(response);
    for (let result of response) {
      appendResult(result.title, result.description, result.link)
    }
  };
      
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      callback(this.responseText);
    }
  }
      
  http.open("GET", "/api/search/" + search_query);
  http.send();
}