const getCodeScript = `
  var userSolution = monaco.editor.getModels()[0].getValue();
  var scriptInjectedElement = document.createElement("pre");
  scriptInjectedElement.innerText += userSolution;
  scriptInjectedElement.setAttribute("id", "extractedUserSolution");
  scriptInjectedElement.setAttribute("style", "color:#fff");
  document.body.appendChild(scriptInjectedElement);
`;

var extractCodeScript = document.createElement('script');
extractCodeScript.id = 'extractCodeScript';
extractCodeScript.appendChild(document.createTextNode(getCodeScript));

(document.body || document.head || document.documentElement).appendChild(extractCodeScript);