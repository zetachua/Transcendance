// client ID: 839396413851-ulblcn6i7rpi92gdspiolqmsp9m95s4h.apps.googleusercontent.com
// secret key: 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
// API Google drive: AIzaSyAWL6k1EUIDYg9gXW_-1I8AmIqW8Jun5ew
// Folder Link: https://drive.google.com/drive/folders/10AL9rNjrnnHd3PcNbswvkX4wvvgmb5BT?usp=share_link 
import React, { useState, useEffect } from "react";
import {gapi} from 'gapi-script';

const GoogleDriveFiles = () => {
    
  const [files, setFiles] = useState([]);

  useEffect(() => {
    gapi.load("client", () => {
      gapi.client
        .init({
          apiKey: "AIzaSyAWL6k1EUIDYg9gXW_-1I8AmIqW8Jun5ew",
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
          ],
          clientId:'839396413851-ulblcn6i7rpi92gdspiolqmsp9m95s4h.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        })
        .then(() => {
          gapi.client.drive.files
            .list({
              q: "mimeType='application/vnd.google-apps.folder' and trashed = false and parents in '10AL9rNjrnnHd3PcNbswvkX4wvvgmb5BT'"
            })
            .then(response => {
              setFiles(response.result.files);
              console.log(response);
            });
        });
    });
  }, []);
  

  return (
    <ul>
      {files.map(file => (
        <li key={file.id}>{file.name}</li>
      ))}
    </ul>
  );
};

export default GoogleDriveFiles;


