export default function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    const geolocation = window.navigator.geolocation;

    if (!geolocation) {
      return reject(new Error('Not supported geo location'));
    }

    geolocation.getCurrentPosition(position => {
      resolve(position);
    });
  });
}
