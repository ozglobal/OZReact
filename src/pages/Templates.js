import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { DropzoneDialog } from 'material-ui-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
  appbar: {
    marginTop: 75,
    paddingLeft: 228,
    backgroundColor: "transparent",
    color: 'black',
    height: 60,
    boxShadow: "0px 0px 0px 0px"
  },
});

class Templates extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      viewer: false,
      index: 0,
      title: "",
      upload: false,
      files: [],
    };
    this.openViewer = this.openViewer.bind(this);
    this.closeViewer = this.closeViewer.bind(this);
    this.openUpload = this.openUpload.bind(this);
    this.closeUpload = this.closeUpload.bind(this);
    this.saveUpload = this.saveUpload.bind(this);
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

  closeUpload() {
    this.setState({ upload: false });
  }
  saveUpload(files) {
      //Saving files to state for further use and closing Modal.
      this.setState({ files: files, upload: false });
  }
  openUpload() {
      this.setState({ upload: true, });
  }

  render () {
    const {classes} = this.props;

    return (
      <>
        <AppBar className={classes.appbar}>
          <div>
            <Button onClick={this.openUpload} size="small" variant="outlined" color="primary" className={classes.button} startIcon={<CloudUploadIcon />} >
              <strong>UPLOAD</strong> </Button>
            <DropzoneDialog
              acceptedFiles={['.ozr']}
              cancelButtonText={"cancel"}
              submitButtonText={"submit"}
              maxFileSize={1000000}
              filesLimit={1}
              open={this.state.upload}
              onClose={this.closeUpload}
              onSave={(files) => {
                console.log('Files:', files);
                this.setState({ upload: false});
              }}
              showPreviews={true}
              showFileNamesInPreview={true}
            />
          </div>
        </AppBar>
        <br />
        <Grid  container className={classes.grid} >
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

                <CardActions  style={{marginTop: -40}} >
                  <Button size="small" color="secondary" > <DeleteForeverIcon /> </Button>
                  <Button size="small" color="primary" > <EditIcon /> </Button>
                </CardActions>
                {(this.state.index === d.id && this.state.viewer) &&
                  <Dialog fullScreen open={this.state.viewer} > 
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