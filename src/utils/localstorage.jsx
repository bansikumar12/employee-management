
const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      total: 3,
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Create Login UI",
        description: "Design and implement login page UI",
        date: "2026-02-01",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-28",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update README",
        description: "Add setup instructions",
        date: "2026-01-25",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstname: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      total: 3,
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Connect frontend with backend API",
        date: "2026-02-02",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Form Validation",
        description: "Add validation to signup form",
        date: "2026-01-29",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy App",
        description: "Deploy application on Netlify",
        date: "2026-01-27",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstname: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      total: 3,
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Create Dashboard",
        description: "Build admin dashboard UI",
        date: "2026-02-03",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize images",
        date: "2026-01-26",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Cross-browser Testing",
        description: "Test app on multiple browsers",
        date: "2026-01-24",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstname: "Vikas",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      total: 3,
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Dark Mode",
        description: "Implement dark mode toggle",
        date: "2026-02-04",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Code",
        description: "Clean and refactor components",
        date: "2026-01-30",
        category: "Refactor",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Unit Tests",
        description: "Write unit tests for utils",
        date: "2026-01-23",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


  const admin = {
    "id": 101,
    "email": "admin@gmail.com",
    "password": "123"
  }


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
 const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees,admin}
}