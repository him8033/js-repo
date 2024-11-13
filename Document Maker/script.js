const noteText = document.getElementById('note-textarea');
const saveNoteBtn = document.getElementById('save-note-btn');

saveNoteBtn.addEventListener('click', function() {
  const note = noteText.value;
  const fileName = "notes.txt";
  const fileContent = note;

  download(fileName, fileContent);

  alert('Note saved!');
});

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}