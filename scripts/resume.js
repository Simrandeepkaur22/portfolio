document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "/simran.pdf"; // Replace with the actual path to your resume file
    link.download = 'Simrandeep Kaur Resume.pdf'; // This is the name of the file that will be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});