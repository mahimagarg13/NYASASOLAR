import React, { Component} from 'react'
import GallaryComponent from "./Galary"
import SimpleReactLightbox from 'simple-react-lightbox';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allImages:[
                {
                    name:"one",
                    src:"/Img/img1.jpeg",
                    tag:"one"
                },
                {
                    name:"two",
                    src:"/Img/img2.jpeg",
                    tag:"two"
                },
                {
                    name:"three",
                    src:"/Img/img3.jpeg",
                    tag:"three"
                },
                {
                    name:"four",
                    src:"/Img/img4.jpeg",
                    tag:"four"
                },
                {
                    name:"five",
                    src:"/Img/eightt.jpeg",
                    tag:"five"
                },
                {
                    name:"six",
                    src:"/Img/fivee.jpeg",
                    tag:"four"
                },
                {
                    name:"seven",
                    src:"/Img/forrr.jpeg",
                    tag:"two"
                },
                {
                    name:"eight",
                    src:"/Img/eleev.jpeg",
                    tag:"three"
                },
                {
                    name:"nine",
                    src:"/Img/ninnne.jpeg",
                    tag:"four"
                },
                {
                    name:"ten",
                    src:"/Img/seven.jpeg",
                    tag:"four"
                },
                {
                    name:"elvn",
                    src:"/Img/oone.jpeg",
                    tag:"five"
                },
                {
                    name:"twlve",
                    src:"/Img/six.jpeg",
                    tag:"four"
                },
                {
                    name:"thrtn",
                    src:"/Img/thrreee.jpeg",
                    tag:"two"
                },
                {
                    name:"fiftn",
                    src:"/Img/ttwo.jpeg",
                    tag:"four"
                },
                {
                    name:"sixtn",
                    src:"/Img/twels.jpeg",
                    tag:"one"
                },
                {
                    name:"sevntn",
                    src:"/Img/ten.jpeg",
                    tag:"two"
                }
            ],
            images:[]
        };
      

      }
      componentDidMount = () => {
          this.setState({images:this.state.allImages})
      }
      filterGalary = (event) => {
          if(event.target.name==="all"){
            this.setState({images:this.state.allImages})
          }
          if(event.target.name==="one"){
           let filteredArray =  this.state.allImages.filter((image) => {
                return image.tag==="one"
            })
            this.setState({images:filteredArray})
          }
          if(event.target.name==="two"){
           let filteredArray =  this.state.allImages.filter((image) => {
                return image.tag==="two"
            })
            this.setState({images:filteredArray})
          }
          if(event.target.name==="three"){
            let filteredArray =  this.state.allImages.filter((image) => {
                 return image.tag==="three"
             })
             this.setState({images:filteredArray})
           }
           if(event.target.name==="four"){
            let filteredArray =  this.state.allImages.filter((image) => {
                 return image.tag==="four"
             })
             this.setState({images:filteredArray})
           }
      }



    render() {
        return (
            <SimpleReactLightbox>

            <GallaryComponent
                state={this.state}
                filterGalary={this.filterGalary}
            />
                </SimpleReactLightbox>

        )
    }
}
