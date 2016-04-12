import React from 'react'
import LinksListContainer from '../containers/linksListContainer'

export default class Categories extends React.Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  mapLinksByCategory(categories){
    return categories
      .map( (category, key) => <LinksListContainer key={key} category={category}/>)
  }

  render(){
    const categories = this.props.categories
    return (
      <div className={'masonry'}>
        {this.mapLinksByCategory(categories)}
      </div>
    )
  }
}