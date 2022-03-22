# File Post Sample
A very simple node app to post and save files.


## Steps to run the app
1. Clone :)
2. cd into the directory <code>cd file_post_example</code>
3. install dependencies <code>npm install</code>
4. run the command <code>node app.js</code>


## Testing
**Testing with curl**  

<code>curl --location --request POST 'localhost:3000/update_ticket' --header 'Content-Type: application/json' --data-raw '{"file_data": "c2FtcGxlIHRleHQgZGF0YQ==", "file_name": "myfile.txt"}'</code>

**Testing with postman**

Simply import the sample_postman_collection and send request