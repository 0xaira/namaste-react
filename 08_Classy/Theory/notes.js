/*


constructor(props) : It is used to initialize the properties of the class.{
    super(props);
    this.state = { // state is a property of the class which is used to store the data. 
        name: "John",
        age: 23,
        profession: "Software Engineer"
    }

}

class ProfileClass extends React.Component {
    render() {
        return (
        <div>
            <h1>My name is {this.props.name}</h1>
            <h2>My age is {this.props.age}</h2>
            <h3>My profession is {this.props.profession}</h3>
        </div>
        );
    }
}
extends : It is used to inherit the properties of the parent class.
render() : It is used to render the JSX content.
return() : It is used to return the JSX content.
this : It is used to access the properties of the class. Props are passed to the class as an argument.

componenttDidMount(): It is used to call the API and fetch the data from the server. It is called after the render() method.

*/


/**

1. constructor() is called first.
2. render() is called second.
3. componentDidMount() is called third.

IMP :
1. ParentConstructor() is called first.
2. ParentRender() is called second.
    -- It will trigger the child constructor() and child render() methods , child ComponentDidMount(). It will complete its lifecycle.
3. ParentComponentDidMount() is called sixth.

When 2 Childs are there then :
ParentConstructor()
Parent Render()
    -- Child1Constructor()
    -- Child1Render()
    -- Child2Constructor()
    -- Child2Render()
    -- Child1ComponentDidMount()
    -- Child2ComponentDidMount()
ParentComponentDidMount()

*/

/*
React LifeCycle:

Render Phase:
1. constructor()
2. render()

Commit Phase: Updating the DOM
3. componentDidMount()

Updating Phase:
4. render()
5. componentDidUpdate()

Unmounting Phase:
6. componentWillUnmount()

*/