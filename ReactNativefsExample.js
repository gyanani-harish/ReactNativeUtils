var RNFS = require('react-native-fs');

const URL = 'http://193.168.0.16:8095/uploadedfiles/Teacher/Resume/41/442016142216-LC14823838-FromCC-ReturnTab-Reprint_20190326111527041.pdf'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
  componentDidMount(){
    this._retrieveData();
    
  }
  
  _retrieveData = async () => {
    try {
      const value = await RNFS.getAllExternalFilesDirs();
      if (value !== null) {
        // We have data!!
        alert(value);
        RNFS.downloadFile({fromUrl:URL, toFile: value[0]+"/harish.pdf"}).promise.then(res => {
          this.setState({ downloaded: true })})
      }
    } catch (error) {
      // Error retrieving data
    }
  };
}
