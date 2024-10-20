// Display selected file name
document.getElementById('image-input').addEventListener('change', function () {
    var fileName = this.files[0].name;
    document.getElementById('file-name').textContent = 'Selected file: ' + fileName;
});

// Toggle visibility of the specified section
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
}