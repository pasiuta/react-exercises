import React, {PureComponent} from "react";
import Article from '../Article';
import './style.css'
export default class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }
    render(){
        console.log('---',2)
    const articleElements = this.props.article.map((a,index) =>
        <li key = {a.id} className="article-list__li">
            <Article article  = {a}
                     isOpen = {this.state.openArticleId === a.id}/>
                     onButtonClick = {this.handleClick.bind(this, a.id)}

        </li>
    )
    return (

        <ul>
            {articleElements}
        </ul>
    )

}
handleClick = openArticleId => this.setState({openArticleId: this.state.openArticleId===openArticleId ? null : openArticleId })
}
