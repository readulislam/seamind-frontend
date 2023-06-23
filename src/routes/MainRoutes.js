import { lazy } from 'react';

// project imports
import Loadable from '../components/Loadable';
import RequireAuth from '../utils/RequireAuth';

// dashboard routing
const Home = lazy(() => import('../pages/Home'));
const MainLayout = lazy(() => import('../layout/MainLayout'));
const StrategicGoals = lazy(() => import('../pages/StrategicGoals'));
const InterventionArea = lazy(() => import('../pages/InterventionArea'));
const DevelopmentGoal = lazy(() => import('../pages/DevelopmentGoal'));
const Metas = lazy(() => import('../pages/Metas'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const Partners = lazy(() => import('../pages/Partner'));
const Chart = lazy(() => import('../common/ChartDashboard/ChartDashboard'));
const Data = lazy(() => import('../pages/DataAndIndicator'));
const Editor = lazy(() => import('../pages/Editor'));
const SinglePartner = lazy(() => import('../pages/Partner/PartnerView'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <Loadable>
      <MainLayout />
    </Loadable>
  ),
  children: [
    {
      path: '/',
      element: <Home />,
    },

    {
      path: 'login',
      element: <Login />,
    },
    {
      path: '/chart',
      element: <Chart />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'editor',
      element: <Editor />,
    },

    {
      path: 'policies',
      children: [
        {
          path: 'objetivos-estratégicos',
          element: (
            <RequireAuth>
              <StrategicGoals />
            </RequireAuth>
          ),
        },
        {
          path: 'áreas-de-intervenção-prioritárias',
          element: <InterventionArea />,
        },
        {
          path: 'metas',
          element: <Metas />,
        },
        {
          path: 'ordenamento-do-espaço-marítimo',
          element: <DevelopmentGoal />,
        },
        {
          path: 'temas',
          element: <DevelopmentGoal />,
        },
        {
          path: 'objetivos-do-desenvolvimento-sustentável',
          element: <DevelopmentGoal />,
        },
        {
          path: 'metas-od-ods-14',
          element: <DevelopmentGoal />,
        },
        {
          path: 'diretiva-quadro-da-estratégia-marinha',
          element: <DevelopmentGoal />,
        },
        {
          path: 'ambiente',
          element: <DevelopmentGoal />,
        },
        {
          path: 'socioeconomia',
          element: <DevelopmentGoal />,
        },
      ],
    },
    {
      path: 'temas',
      children: [
        {
          path: 'educação-formação-e-desporto',
          element: <DevelopmentGoal />,
        },
        {
          path: 'ciência-tecnologia-e-inovação',
          element: <DevelopmentGoal />,
        },
        {
          path: 'governação',
          element: <DevelopmentGoal />,
        },
        {
          path: 'economia',
          element: <DevelopmentGoal />,
        },
        {
          path: 'proteção-e-salvaguarda',
          element: <DevelopmentGoal />,
        },
        {
          path: 'ambiente-marinho',
          element: <DevelopmentGoal />,
        },
        {
          path: 'recursos-vivos',
          element: <DevelopmentGoal />,
        },
        {
          path: 'recursos-não-vivos',
          element: <DevelopmentGoal />,
        },
        {
          path: 'infraestruturas-serviços-e-atividades',
          element: <DevelopmentGoal />,
        },
        {
          path: 'turismo-Recreio-bem-estar-e-cultura',
          element: <DevelopmentGoal />,
        },
      ],
    },

    {
      path: 'Parceiros',
      element: <Partners />,
    },
    {
      path: 'data&indicators',
      element: <Data />,
    },
    {
      path: 'partner',
      element: <SinglePartner />,
    },

    // {
    //     path: 'utils',
    //     children: [
    //         {
    //             path: 'util-typography',
    //             element: <UtilsTypography />
    //         }
    //     ]
    // },
    // {
    //     path: 'utils',
    //     children: [
    //         {
    //             path: 'util-color',
    //             element: <UtilsColor />
    //         }
    //     ]
    // },
    // {
    //     path: 'utils',
    //     children: [
    //         {
    //             path: 'util-shadow',
    //             element: <UtilsShadow />
    //         }
    //     ]
    // },
    // {
    //     path: 'icons',
    //     children: [
    //         {
    //             path: 'tabler-icons',
    //             element: <UtilsTablerIcons />
    //         }
    //     ]
    // },
    // {
    //     path: 'icons',
    //     children: [
    //         {
    //             path: 'material-icons',
    //             element: <UtilsMaterialIcons />
    //         }
    //     ]
    // },
    // {
    //     path: 'sample-page',
    //     element: <SamplePage />
    // }
  ],
};

export default MainRoutes;
