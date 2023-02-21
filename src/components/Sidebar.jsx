import Avatar from '../img/fotoceci.jpeg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Maria Cecília"/>
        <p className="title">Desenvolvedora Front-end</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download Currículo</a>
    </aside>
}

export default Sidebar