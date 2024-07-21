document.addEventListener('DOMContentLoaded', () => {
    const target = { count: 0 };
  
    const handler = {
      set: function (obj, prop, value) {
        if (prop === 'count') {
          if (value < 0) {
            showToast('Negative numbers aren\'t allowed');
            return false; // Prevent setting the value if negative
          }
          console.log(`Setting count to ${value}`);
          const countElement = document.getElementById('count');
          countElement.innerText = value;
          countElement.classList.add('change');
          setTimeout(() => {
            countElement.classList.remove('change');
          }, 300);
        }
        obj[prop] = value;
        return true;
      }
    };
  
    const proxy = new Proxy(target, handler);
  
    document.getElementById('add-btn').addEventListener('click', () => {
      proxy.count += 1;
    });
  
    document.getElementById('subtract-btn').addEventListener('click', () => {
      proxy.count -= 1;
    });
  
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.innerText = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000); // Hide toast after 3 seconds
    }
  });
  