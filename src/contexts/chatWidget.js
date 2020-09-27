
class ChatWidget {
  
  constructor() {
    this.state = {
      dashboardBack: true
    }
  }
  onDashboardBack = (ownState) => {
    console.log('call of duty', ownState);
    // setDashboardBack(!dashboardBack);
  };
  onSubmitForm = (e) => {
    e.preventDefault();
  };
 
}
 
export default ChatWidget;