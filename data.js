var data = [
  {
    "category": "Express Yourself",
    "questions": [
      {
        "points": '$100',
        "question": "These 3 arguments are passed into the callback function when using methods like app.get, app.put or app.delete",
        "answer": "What is req, res & next?"
      },
      {
        "points": '$200',
        "question": "Without this app method, your application won't hear http requests",
        "answer": "What is listen?"
      },
      {
        "points": '$300',
        "question": "This express middleware function designates a directory from which you can serve images, CSS and javascript files",
        "answer": "What is static?"
      },
      {
        "points": '$400',
        "question": "This res status is sent out when the post method successfully creates new instances in your database",
        "answer": "What is 201?"
      },
      {
        "points": '$500',
        "question": "When two response's are not constrained in an if/else block, this error is generated",
        "answer": "What is 'Cannot set headers after they are sent to the client'?"
      }
    ]
  },
  {
    "category": "Sequelize Part Deux",
    "questions": [
      {
        "points": '$100',
        "question": "This Sequelize keyword can specify whether or not a column can have no value",
        "answer": "What is allowNull?"
      },
      {
        "points": '$200',
        "question": "These columns do not get saved to the database, rather they are calculated based on values in other columns",
        "answer": "What are virtual columns?"
      },
      {
        "points": '$300',
        "question": "This type of method will help you override how a property is retrieved using sequelize",
        "answer": "What is a getter?"
      },
      {
        "points": '$400',
        "question": `This type of join creates the ability to use "include" in queries to include data about related rows `,
        "answer": "What is eager loading?"
      },
      {
        "points": '$500',
        "question": "If a User.hasMany(Post), and each Post has only one User, then Posts should have this association to Users",
        "answer": "What is a belongsTo?"
      }
    ]
  },
  {
    "category": "Sassy Stylin'",
    "questions": [
      {
        "points": '$100',
        "question": "The CSS property which defines how much space is between the border and content of an HTML element",
        "answer": "What is padding?"
      },
      {
        "points": '$200',
        "question": "If you want to make an element transparent, this CSS property can help",
        "answer": "What is opacity?"
      },
      {
        "points": '$300',
        "question": "This CSS property allows you to give a box rounded corners",
        "answer": "What is border-radius?"
      },
      {
        "points": '$400',
        "question": "When using flex-box, this property can have values like 'flex-start', 'center', and 'space-between'",
        "answer": "What is justify-content?"
      },
      {
        "points": '$500',
        "question": "When using position-absolute, this property makes a parent element the basis for the position",
        "answer": "What is position: relative?"
      }
    ]
  },
  {
    "category": "React on Instinct",
    "questions": [
      {
        "points": '$100',
        "question": "This tag syntax is used by react, and it's definitly not HTML",
        "answer": "What is JSX?"
      },
      {
        "points": '$200',
        "question": "This is the method you should use to change state in react to avoid mutation",
        "answer": "What is setState?"
      },
      {
        "points": '$300',
        "question": "This lifecycle hook runs after the component output has been rendered to the DOM",
        "answer": "What is componentDidMount?"
      },
      {
        "points": '$400',
        "question": "this.props is called in this kind of component",
        "answer": "What is a class based component?"
      },
      {
        "points": '$500',
        "question": "This lifecyle hook is called right before a component is removed from the DOM",
        "answer": "What is componentWillUnmount?"
      }
    ]
  },
  {
    "category": "Are You Feelin' Reducksy",
    "questions": [
      {
        "points": '$100',
        "question": "This is a function that creates actions",
        "answer": "What is an action creator?"
      },
      {
        "points": '$200',
        "question": "These redux methods return functions that interact with APIs and dispatch action creators",
        "answer": "What are thunks?"
      },
      {
        "points": '$300',
        "question": "These redux functions specify how an application's state changes in response to actions sent to the store",
        "answer": "What are reducers?"
      },
      {
        "points": '$400',
        "question": "Just like a component's state, you should never do this to an object in the redux store",
        "answer": "What is mutate?"
      },
      {
        "points": '$500',
        "question": "This developer works on react.js and is the co-creator and most prolific contributor to redux",
        "answer": "Who is Dan Abramov?"
      },

    ]
  }
];
