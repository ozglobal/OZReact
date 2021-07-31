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
        marginLeft: 5,
        marginTop: -5,
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
      oz.sendToActionScript('connection.servlet', `/oz/server`, );
      oz.sendToActionScript('connection.reportname',`${this.props.title}`,);
      oz.sendToActionScript('connection.pcount', `1`,);
      oz.sendToActionScript('connection.args1', 'smoker=Yes',);
    };
    window.start_ozjs('OZviewer', `/html5viewer/`);
  };

  render () {
    const {classes} = this.props;

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton  onClick={this.props.close} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {this.props.title}
            </Typography>
            <Button onClick={this.submit} variant="contained" color="default"><strong>SUBMIT</strong></Button>
          </Toolbar>
        </AppBar>
        <OZviewer /> 
      </>
    );
  }
}

export default withStyles(styles)(Viewer);