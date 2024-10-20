import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));  // Create a URL for the preview
    } else {
      alert('Please select an image file');
    }
  };

  // Handle file upload (you can mock or actually send the file to an API)
  const handleUpload = async () => {
    if (!selectedImage) {
      alert('No file selected!');
      return;
    }

    // Mock upload process
    alert('Image uploaded successfully!');
    console.log('Image File:', selectedImage);
    // In a real scenario, you would send the image to your API using fetch or axios.
    // const formData = new FormData();
    // formData.append('file', selectedImage);
    // await fetch('YOUR_API_ENDPOINT', { method: 'POST', body: formData });
  };

  return (
    <div className="file-uploader">
      <h1 className="text-xl font-bold mb-4">Upload an Image</h1>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        className="mb-4"
      />

      {imagePreview && (
        <div className="image-preview mb-4">
          <img 
            src={imagePreview} 
            alt="Preview" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}

      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleUpload}
      >
        Upload Image
      </button>
    </div>
  );
};

export default FileUploader;
