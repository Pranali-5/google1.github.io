var searchResult = document.getElementById("searchResult");
var r2 = document.createElement("div");
async function search() {
  var r1 = "";
  let q = document.getElementById("query").value;
  searchResult.innerHTML = null;
  let res = await fetch(
    `http://api.serpstack.com/search?access_key=be812d29c7d04a1c8511c62e4e1e7580&query=${q}`
  );
  let data = await res.json();
  console.log(data);
  let r = data.organic_results;
  r.forEach((result) => {
    r1 += `<h1>${result.title}</h1><br>
                                            <a target=_blank href="${result.url}">${result.url}</a>
                                            <p>${result.snippet}</p>`;
  });
  r2.innerHTML = r1;
  searchResult.append(r2);
}
