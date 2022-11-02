
const publicMenu = {
  list: {
    home: {
      url: '/home',
      label: 'Home',
      menu: true
    },
    about: {
      url: '/about',
      label: 'About',
      menu: true
    },
    plan: {
      url: '/plan',
      label: 'Plan',
      menu: true
    },

    verify: {
      url: '/verify',
      label: 'Verify',
      menu: true
    },

    contactus: {
      url: '/contactus',
      label: 'Contact us',
      menu: true
    },
    learn:{
      url:"/learn",
      label:"Learn",
      menu:true
    },
    login: {
      url: '/login',
      label: 'Login', 
      menu: true
    }

  },
  dropDown:{}
};

const privateMenu = {
  list: {
    home: {
      url: '/home',
      label: 'Home',
      menu: true
    },
    documents: {
      url: '/documents',
      label: 'Documents',
      menu: true
    },
    documentsVerifier: {
      url: '/documents/verifier',
      label: 'Documents Verifier',
      menu: false
    },
    documentsRequester: {
      url: '/documents/requester',
      label: 'Documents Requester',
      menu: false
    },
    dashboard:{
      url:'/dashboard',
      label:'Dashboard',
      menu:true
          },
    documentsCreate: {
      url: '/documents/create',
      label: 'Documents Create',
      menu: false
    }
  },
  dropDown: {
    profile: {
      url: '/profile',
      label: 'Profile',
      menu: true
    },
    transactions: {
      url: '/transactions',
      label: 'Transactions',
      menu: true
    },
    dashboard:{
      url:"/dashboard",
      label:"Dashboard",
      menu:true
    },
    logout: {
      url: '/logout',
      label: 'Log Out',
      menu: true
    }
  }
};
const routes = Object.assign({}, privateMenu.list, publicMenu.list, privateMenu.dropDown, publicMenu.dropDown);

export default {
  private: privateMenu,
  public: publicMenu,
  routes: routes,
  home: publicMenu.list.home,
  contactus:publicMenu.list.contactus,
  documents: {
    list: privateMenu.list.documents.url,
    create: privateMenu.list.documentsCreate.url,
    verifier: privateMenu.list.documentsVerifier.url,
    requester: privateMenu.list.documentsRequester.url
  }
}