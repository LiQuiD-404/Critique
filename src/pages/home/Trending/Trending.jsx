import {ReactComponentElement, useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousal/Carousal'


const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");
    const {data, loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        if(tab === 'Day'){
            setEndpoint("day")
        } 
        else{
            setEndpoint("week")
        }
    }


    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
                
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>

        </div>
    )
}

export default Trending
