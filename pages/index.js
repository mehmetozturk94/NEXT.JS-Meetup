import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
    {
    id: 'city1',
    title: 'A first Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istanbul_asv2020-02_img47_Galata_Tower.jpg/1024px-Istanbul_asv2020-02_img47_Galata_Tower.jpg',
    adress : 'Istanbul',
    description : 'Galata Tower'
    },
    {
    id: 'city2',
    title: 'Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istanbul_asv2020-02_img47_Galata_Tower.jpg/1024px-Istanbul_asv2020-02_img47_Galata_Tower.jpg',
    adress : 'Istanbul',
    description : 'Galata Tower'
    }
]

function HomePage(){
    return (
        <MeetupList meetups={DUMMY_MEETUPS}/>
    )
}
export default HomePage;