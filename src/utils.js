/**
 * 
 * @param {File} photo 
 * @returns {String} 
 */
export const convertFileToBase64 = (photo) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
      reader.onload = function (event) {
        const photoString = event.target.result;
        resolve(photoString);
      };
      reader.onerror = function (event) {
        return reject(event);
      }
      reader.readAsDataURL(photo);
  })
}