export default {
  Button1onClick: () => {
    return Api3.data.length > 0 ? 
      navigateTo("Page2") : 
      showModal('ErrorModal');
  }
}