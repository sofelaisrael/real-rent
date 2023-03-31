import Agent1 from '../Assets/Agent1.jpg'
import Agent2 from '../Assets/Agent2.jpg'
import Agent3 from '../Assets/Agent3.jpg'
import Agent4 from '../Assets/Agent4.jpg'
import Agent5 from '../Assets/Agent5.jpg'
import Agent6 from '../Assets/Agent6.jpg'
import Agent7 from '../Assets/Agent7.jpg'



import House1 from '../Assets/House1.jpg'
import House2 from '../Assets/House2.jpg'
import House3 from '../Assets/House3.jpg'
import House4 from '../Assets/House4.jpg'
//import House5 from '../Assets/House5.jpg'
import House6 from '../Assets/House6.jpg'
import House7 from '../Assets/House7.jpg'
import House8 from '../Assets/House8.jpg'
import House9 from '../Assets/House9.jpg'
import House10 from '../Assets/House10.jpg'
import House11 from '../Assets/House11.jpg'
import House12 from '../Assets/House12.jpg'
import House15 from '../Assets/House15.jpg'
import House18 from '../Assets/House18.jpg'
import House16 from '../Assets/House16.jpg'



import Apartment1 from '../Assets/Apartment1.jpg'
import Apartment2 from '../Assets/Apartment2.jpg'
import Apartment3 from '../Assets/Apartment3.jpg'
import Apartment4 from '../Assets/Apartment4.jpg'
import Apartment5 from '../Assets/Apartment5.jpg'
import Apartment6 from '../Assets/Apartment6.jpg'
import Apartment7 from '../Assets/Apartment7.jpg'
import Apartment8 from '../Assets/Apartment8.jpg'
import Apartment9 from '../Assets/Apartment9.jpg'
import Apartment10 from '../Assets/Apartment10.jpg'
import Apartment11 from '../Assets/Apartment11.jpg'
import Apartment12 from '../Assets/Apartment12.jpg'
import Apartment13 from '../Assets/Apartment13.jpg'
import Apartment14 from '../Assets/Apartment14.jpg'
import Apartment16 from '../Assets/Apartment16.jpg'
import Apartment17 from '../Assets/Apartment17.jpg'
import Apartment18 from '../Assets/Apartment18.jpg'

export const houseData = [
    {
        id:1,
        images: House1,
        type: 'House',
        name: 'House 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        price: '120000',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        agent:{
            image: Agent3,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:2,
        images: House2,
        type: 'House',
        name: 'House 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '3',
        surface: '350 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '180000',
        agent:{
            image: Agent1,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:3,
        images: House3,
        type: 'House',
        name: 'House 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent2,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:4,
        images: Apartment1,
        type: 'Apartment',
        name: 'Apartment 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent4,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:5,
        images: Apartment2,
        type: 'Apartment',
        name: 'Apartment 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '2',
        surface: '200 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '220000',
        agent:{
            image: Agent5,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:6,
        images: Apartment3,
        type: 'Apartment',
        name: 'Apartment 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent6,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:7,
        images: House6,
        type: 'House',
        name: 'House 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '3',
        bathrooms: '2',
        surface: '500 sq ft',
        year: '2017',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '160000',
        agent:{
            image: Agent3,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:8,
        images: House10,
        type: 'House',
        name: 'House 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '7',
        bathrooms: '3',
        surface: '380 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '200000',
        agent:{
            image: Agent6,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:9,
        images: House9,
        type: 'House',
        name: 'House 9',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '5',
        bathrooms: '3',
        surface: '300 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '100000',
        agent:{
            image: Agent7,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:10,
        images: Apartment11,
        type: 'Apartment',
        name: 'Apartment 10',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '180000',
        agent:{
            image: Agent2,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:11,
        images: Apartment14,
        type: 'Apartment',
        name: 'Apartment 11',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2021',
        interior1: House15,
        interior2: Apartment16,
        interior3: Apartment17,
        price: '150000',
        agent:{
            image: Agent5,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:'12',
        images: Apartment13,
        type: 'Apartment',
        name: 'Apartment 12',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2022',
        interior1: Apartment17,
        interior2: Apartment16,
        interior3: House15,
        price: '250000',
        agent:{
            image: Agent5,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:13,
        images: House9,
        type: 'House',
        name: 'House 13',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment5,
        interior2: Apartment6,
        interior3: House15,
        price: '300000',
        agent:{
            image: Agent5,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:14,
        images: House6,
        type: 'House',
        name: 'House 14',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '2',
        surface: '350 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '130000',
        agent:{
            image: Agent7,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:15,
        images: House4,
        type: 'House',
        name: 'House 15',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '160000',
        agent:{
            image: Agent5,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:16,
        images: Apartment12,
        type: 'Apartment',
        name: 'Apartment 16',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2020',
        interior1: Apartment4,
        interior2: House16,
        interior3: House15,
        price: '250000',
        agent:{
            image: Agent3,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:17,
        images: Apartment10,
        type: 'Apartment',
        name: 'Apartment 17',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '3',
        surface: '380 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '180000',
        agent:{
            image: Agent1,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:18,
        images: Apartment4,
        type: 'Apartment',
        name: 'Apartment 18',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent6,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:19,
        images: House11,
        type: 'House',
        name: 'House 19',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent7,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:20,
        images: House7,
        type: 'House',
        name: 'House 20',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '4',
        bathrooms: '2',
        surface: '400 sq ft',
        year: '2021',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '170000',
        agent:{
            image: Agent2,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:21,
        images: House8,
        type: 'House',
        name: 'House 21',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '200000',
        agent:{
            image: Agent5,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:22,
        images: Apartment6,
        type: 'Apartment',
        name: 'Apartment 22',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '190000',
        agent:{
            image: Agent7,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:23,
        images: Apartment8,
        type: 'Apartment',
        name: 'Apartment 23',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '2',
        surface: '350 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: Apartment4,
        price: '160000',
        agent:{
            image: Agent3,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:24,
        images: Apartment5,
        type: 'Apartment',
        name: 'Apartment 23',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '190000',
        agent:{
            image: Agent1,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    {
        id:25,
        images: House12,
        type: 'House',
        name: 'House 25',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '170000',
        agent:{
            image: Agent7,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:26,
        images: Apartment9,
        type: 'Apartment',
        name: 'Apartment 26',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '2',
        surface: '350 sq ft',
        year: '2020',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '100000',
        agent:{
            image: Agent1,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:27,
        images: Apartment7,
        type: 'Apartment',
        name: 'Apartment 27',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment18,
        interior2: Apartment16,
        interior3: House15,
        price: '230000',
        agent:{
            image: Agent5,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },
    /*{
        id:4,
        images: Apartment1,
        type: 'Apartment',
        name: 'Apartment 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United States',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        interior1: Apartment3,
        interior2: Apartment16,
        interior3: House15,
        price: '120000',
        agent:{
            image: Agent4,
            name: 'Ben Austin',
            phone: '0123456789'
        }
    },
    {
        id:5,
        images: Apartment2,
        type: 'Apartment',
        name: 'Apartment 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'United Kingdom',
        bedrooms: '5',
        bathrooms: '2',
        surface: '350 sq ft',
        year: '2020',
        price: '100000',
        agent:{
            image: Agent5,
            name: 'John Doe',
            phone: '0123456789'
        }
    },
    {
        id:6,
        images: Apartment3,
        type: 'Apartment',
        name: 'Apartment 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aliquam totam unde nulla, sit facere fugit illum recusandae harum voluptates magnam quos dolor distinctio aspernatur eos libero mollitia voluptatibus et.   ',
        country: 'Canada',
        bedrooms: '6',
        bathrooms: '3',
        surface: '400 sq ft',
        year: '2019',
        price: '120000',
        agent:{
            image: Agent6,
            name: 'Bryce Jane',
            phone: '0123456789'
        }
    },*/
]


