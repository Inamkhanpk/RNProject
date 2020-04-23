import React,{Component} from 'react'
import imgLogo from  './../assets/imgLogo.png'


class SplashPage extends Component {

    
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{position: 'absolute', left: 0, top: 0, width: windowSize.width, height: windowSize.height}} source={imgLogo}></Image>
            </View>
        );
    }
}

export default SplashPage;