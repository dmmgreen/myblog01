import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default class AddArticle extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: '',title:'' };
        this.handleChange = this.handleChange.bind(this);
        this.modules= {
            toolbar:  [
                [{ 'font': [] }],
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction
                ['link', 'image','video'],
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'align': [] }],
                ['clean']                                         // remove formatting button
            ]
        };

        this.formats=[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'color',
        ]
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.ispublish){
            alert('发布成功!');
            nextProps.history.push('/');
        }
        if(!nextProps.islogin){
            nextProps.history.push('/');
        }
    }
    handleChange(value) {
        this.setState({ text: value })
    }
    handleAddArticle(e){
        const {text,title}=this.state;
        const {postArticle,userId}=this.props;
        if(title.length<1){
            alert('标题不能为空');
            return ;
        }
        if(text.length<1){
            alert('内容不能为空');
            return ;
        }
        let info={
            title:title,
            content:text,
            token:userId,
            article:''
        };
        postArticle(info);
    }
    componentDidMount(){
        const {islogin}=this.props;
        if(!islogin){
            this.props.history.push('/login');
        }
    }
    render(){
        return (
            <div>
                <input type="text"
                       value={this.state.title}
                       className="addTitle"
                       placeholder="无标题文章"
                       onChange={e=>this.setState({
                           title:e.target.value
                       })}
                />
                <ReactQuill theme="snow"
                            value={this.state.text}
                            onChange={this.handleChange}
                            modules={this.modules}
                            formats={this.formats}
                            style={{'textAlign':'left'}}>
                    <div style={{'height':'500px'}}/>
                </ReactQuill>
                <div>
                    <input type="button" value="发布文章" className="add-article-btn" onClick={e=>this.handleAddArticle(e)}/>
                </div>
            </div>
        )
    }
};