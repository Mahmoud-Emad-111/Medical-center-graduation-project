import React, { useState } from 'react';

export default function DetectNow() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsDataURL(file); // Use readAsDataURL to read image files
    }
  };

  return (
    <div className="container text-center text-black mt-5" style={{ backgroundColor: 'rgba(210, 223, 226, 0.33)', color: 'white' }}>
      <div className="row">
        <div className="col-md-12 fw-bold">
          <h2 className="text-black fs-2">Upload File</h2>
          <input type="file" onChange={handleFileChange} />
          {selectedFile && (
            <div>
              <h3>Selected File:</h3>
              <p>Name: {selectedFile.name}</p>
              <p>Type: {selectedFile.type}</p>
              <p>Size: {selectedFile.size} bytes</p>
            </div>
          )}
          {fileContent && (
            <div>
              <h3>File Preview:</h3>
              <img src={fileContent} alt="Selected File" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
