import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import FormList from './Templates/FormList';
import Viewer from './Templates/Viewer';

const styles = theme => ({
  grid: {
    marginTop: 112,
    marginLeft: 20,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(21),
      height: theme.spacing(30),
    },
  },
  media: {
    height: 220,
  },
});

class Templates extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      viewer: false,
      index: 0,
      title: ""
    };
    this.openViewer = this.openViewer.bind(this);
    this.closeViewer = this.closeViewer.bind(this);
  }

  openViewer(e, id) {
    const obj = FormList.find(FormList => FormList.id === id);
    this.setState({ viewer: true });
    this.setState({ index: id });
    this.setState({ title: obj.title });
  }

  closeViewer() {
    this.setState({ viewer: false });
    this.setState({ index: 0 });
    this.setState({ title: "" });
  }

  render () {
    const {classes} = this.props;

    return (
      <>
        <Grid container className={classes.grid} >
          {FormList.map((d) => (
            <Card key={d.id} >
              <CardActionArea onClick={((e) => this.openViewer(e, d.id))}>
                <Typography variant="subtitle2" align="center">
                  <strong>{d.title}</strong>
                </Typography>
                <CardMedia className={classes.media} align="center">
                  <img src={d.img} alt={d.title} />
                </CardMedia>
              </CardActionArea>
                {(this.state.index === d.id && this.state.viewer) &&
                  <Dialog disableEnforceFocus fullScreen open={this.state.viewer} > 
                    <Viewer title={this.state.title} close={this.closeViewer} />
                  </Dialog>
                }
            </Card>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Templates);