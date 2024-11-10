#  Gallery Explorer

**Gallery Explorer** is a simple yet interactive photo gallery web application that allows users to view a random collection of photos from the Unsplash API. Users can input the number of photos they want to display, and the gallery adapts to show these images in a visually appealing format.

## Features

- Fetches random photos from the Unsplash API.
- User input validation for the number of images (between 1 and 10).
- Responsive design that adjusts image layout (up to 3 images per row).
- Displays a loading spinner while fetching images.
- Error handling for API requests and input validation.

##  Project Structure
Gallery-Explorer/ ├── index.html # Main HTML file ├── style.css # CSS styling ├── index.js # JavaScript logic ├── spinner.svg # Loading spinner image ├── README.md # Project documentation 


##  Technologies Used

- **HTML**: For the basic structure of the web page.
- **CSS**: For styling and responsive design.
- **JavaScript**: For fetching images from the API and handling user input.
- **Unsplash API**: To fetch random high-quality images.

## Usage
1. Enter the number of photos you want to view (between 1 and 10).
2. Click on the "Get Photos" button.
3. The gallery will fetch random photos and display them in a grid layout.
4. If the input is invalid (e.g., less than 1 or greater than 10), an error message will be shown.


