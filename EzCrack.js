function encc(passwd){


    var encyptUserName = encrypt(passwd);  //only the function 'encrypt' is need to change inorder to satisfy the specific encrypt login form
    console.log(passwd);
    console.log(encyptUserName);
    return encyptUserName;
}


function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var contents = event.target.result;
        var lines = contents.split('\n');

        var encryptedLines = lines.map(function (line) {
            var encryptedLine = encc(line);
            return encryptedLine;
        });

        var encryptedOutput = encryptedLines.join('\n');

        var blob = new Blob([encryptedOutput], { type: 'text/plain' });
        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'encrypted_output.txt';

        downloadLink.click();
    };

    reader.readAsText(file);
}

var fileInput = document.createElement('input');
fileInput.type = 'file';

fileInput.addEventListener('change', handleFileSelect, false);

fileInput.click();
