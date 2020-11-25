if('serviceWorker' in navigator){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('/dist/sw.js').then(registration => {
      console.log('serviceWorker Registration success with scope: ', registration.scope);
    }, (err) => {
      console.log('serviceWorker registration failed:', err)
    })
  })
}