import moment from 'moment'

const formatDate = function(date) {
    if ( moment(date).format("MMMM DD YYYY, h:mm:ss a") == "Invalid date" ) {
      return "No date available!";
    } else {
      return moment(date).format("MMMM DD YYYY, h:mm:ss a");
    }
}

export default formatDate