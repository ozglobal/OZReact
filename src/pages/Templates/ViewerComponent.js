import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 1,
  },
});

const OZviewer = () => {
  return (    
    <div 
      id="OZviewer" 
      style={{
        width: '99%',
        height: '93vh',
        marginTop: 60,
      }}>
    </div>
  );
}

class Viewer extends React.Component {

  submit = () => {
    if (window.OZviewer.GetInformation("INPUT_CHECK_VALIDITY") === 'valid') {
      const input = window.OZviewer.GetInformation("INPUT_JSON_ALL"); 
      alert(input);
      this.props.close();
    }
  };

  componentDidMount() {
    window.SetOZParamters_OZviewer = () => {
      const oz = document.getElementById('OZviewer');
      oz.sendToActionScript(
        'connection.servlet',
        `/oz/server`,
      );
      oz.sendToActionScript(
        'connection.reportname',
        `/edu/eformdev/customer-submit.ozr`,
      );
    };
    window.start_ozjs('OZviewer', `/html5viewer/`);
  };

  render () {
    const {classes} = this.props;

  return (
    <>
      <OZviewer />
    </>
  );
 }
}

export default withStyles(styles)(Viewer);