import { Route, Routes,Navigate } from 'react-router-dom';

import React, { lazy } from 'react';
import Loadable from '../layouts/loader/Loadable';

import UserToken from '../components/UserToken';
// import { Details } from '@material-ui/icons';

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
/***** Pages ****/

// Modals
const EditCostingSummaryModal = Loadable(
  lazy(() => import('../components/Tender/EditCostingSummaryModal')),
);
//const EnquiryTable = Loadable(lazy(() => import('../views/smartconTables/Enquiry')));
const ChecklistTable = Loadable(lazy(() => import('../views/smartconTables/Checklist')));
const LocationTable = Loadable(lazy(() => import('../views/smartconTables/Location')));
const ApplicationList = Loadable(lazy(() => import('../views/smartconTables/ApplicationList')));
const ProjectDashboard = Loadable(lazy(() => import('../views/smartconTables/ProjectDashboard')));
const EditQuoteModal = Loadable(lazy(() => import('../components/Tender/EditQuoteModal')));
const EditLineItemModal = Loadable(lazy(() => import('../components/Tender/EditLineItemModal')));

const PdfData = Loadable(lazy(() => import('../views/smartconTables/Tickets')));
const PdfNext = Loadable(lazy(() => import('../views/smartconTables/GeneratePdf')));

const TicketsComponent = Loadable(lazy(() => import('../views/smartconTables/TicketsComponent')));
const Classic = Loadable(lazy(() => import('../views/dashboards/Cubosale')));
const Crypto = Loadable(lazy(() => import('../views/dashboards/Crypto')));
const Ecommerce = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
const General = Loadable(lazy(() => import('../views/dashboards/General')));
const Extra = Loadable(lazy(() => import('../views/dashboards/Extra')));
const About = Loadable(lazy(() => import('../views/About')));

/***** Apps ****/
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Chat = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/CalendarApp')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Shop = Loadable(lazy(() => import('../views/apps/ecommerce/Shop')));
const ShopDetail = Loadable(lazy(() => import('../views/apps/ecommerce/ShopDetail')));
const Treeview = Loadable(lazy(() => import('../views/apps/treeview/TreeView')));
const TicketList = Loadable(lazy(() => import('../views/apps/ticket/TicketList')));
const TicketDetail = Loadable(lazy(() => import('../views/apps/ticket/TicketDetail')));

/***** Ui Elements ****/
const Alerts = Loadable(lazy(() => import('../views/ui/Alerts')));
const Badges = Loadable(lazy(() => import('../views/ui/Badges')));
const Buttons = Loadable(lazy(() => import('../views/ui/Buttons')));
const Cards = Loadable(lazy(() => import('../views/ui/Cards')));
const Grid = Loadable(lazy(() => import('../views/ui/Grid')));
const Tables = Loadable(lazy(() => import('../views/ui/Tables')));
const Forms = Loadable(lazy(() => import('../views/ui/Forms')));
const Breadcrumbs = Loadable(lazy(() => import('../views/ui/Breadcrumbs')));
const Dropdowns = Loadable(lazy(() => import('../views/ui/DropDown')));
const BtnGroup = Loadable(lazy(() => import('../views/ui/BtnGroup')));
const Collapse = Loadable(lazy(() => import('../views/ui/Collapse')));
const ListGroup = Loadable(lazy(() => import('../views/ui/ListGroup')));
const Modal = Loadable(lazy(() => import('../views/ui/Modal')));
const Navbar = Loadable(lazy(() => import('../views/ui/Navbar')));
const Nav = Loadable(lazy(() => import('../views/ui/Nav')));
const Pagination = Loadable(lazy(() => import('../views/ui/Pagination')));
const Popover = Loadable(lazy(() => import('../views/ui/Popover')));
const Progress = Loadable(lazy(() => import('../views/ui/Progress')));
const Spinner = Loadable(lazy(() => import('../views/ui/Spinner')));
const Tabs = Loadable(lazy(() => import('../views/ui/Tabs')));
const Toasts = Loadable(lazy(() => import('../views/ui/Toasts')));
const Tooltip = Loadable(lazy(() => import('../views/ui/Tooltip')));

/***** Form Layout Pages ****/
const FormBasic = Loadable(lazy(() => import('../views/form-layouts/FormBasic')));
const FormGrid = Loadable(lazy(() => import('../views/form-layouts/FormGrid')));
const FormGroup = Loadable(lazy(() => import('../views/form-layouts/FormGroup')));
const FormInput = Loadable(lazy(() => import('../views/form-layouts/FormInput')));

/***** Form Pickers Pages ****/
const Datepicker = Loadable(lazy(() => import('../views/form-pickers/DateTimePicker')));
const TagSelect = Loadable(lazy(() => import('../views/form-pickers/TagSelect')));

/***** Form Validation Pages ****/
const FormValidate = Loadable(lazy(() => import('../views/form-validation/FormValidation')));
const FormSteps = Loadable(lazy(() => import('../views/form-steps/Steps')));
const FormEditor = Loadable(lazy(() => import('../views/form-editor/FormEditor')));
/***** Table Pages ****/
const Basictable = Loadable(lazy(() => import('../views/tables/TableBasic')));
const CustomReactTable = Loadable(lazy(() => import('../views/tables/CustomReactTable')));
const ReactBootstrapTable = Loadable(lazy(() => import('../views/tables/ReactBootstrapTable')));

/***** Chart Pages ****/
const ApexCharts = Loadable(lazy(() => import('../views/charts/ApexCharts')));
const ChartJs = Loadable(lazy(() => import('../views/charts/ChartJs')));

/***** Sample Pages ****/
const StarterKit = Loadable(lazy(() => import('../views/sample-pages/StarterKit')));
const Profile = Loadable(lazy(() => import('../views/sample-pages/Profile')));
const Gallery = Loadable(lazy(() => import('../views/sample-pages/Gallery')));
const SearchResult = Loadable(lazy(() => import('../views/sample-pages/SearchResult')));
const HelperClass = Loadable(lazy(() => import('../views/sample-pages/HelperClass')));

/***** Icon Pages ****/
const Bootstrap = Loadable(lazy(() => import('../views/icons/Bootstrap')));
const Feather = Loadable(lazy(() => import('../views/icons/Feather')));

/***** Map Pages ****/
const CustomVectorMap = Loadable(lazy(() => import('../views/maps/CustomVectorMap')));

/***** Widget Pages ****/
const Widget = Loadable(lazy(() => import('../views/widget/Widget')));

/***** CASL Access Control ****/
const CASL = Loadable(lazy(() => import('../views/apps/accessControlCASL/AccessControl')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
const Reports = Loadable(lazy(() => import('../views/cubosale/Reports')));
const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const ResetPassword = Loadable(lazy(() => import('../views/auth/Reset')));

const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));
const AddProjects = Loadable(lazy(() => import('../views/cubosale/AddProjects')));
const EditProject = Loadable(lazy(() => import('../views/cubosale/EditProject')));

// Tender
const UserTable = Loadable(lazy(() => import('../views/smartconTables/User')));
const ScoreManagementTable = Loadable(lazy(() => import('../views/smartconTables/ScoreManagement')));

const TaskTable = Loadable(lazy(() => import('../views/smartconTables/Task')));
const ProductTable = Loadable(lazy(() => import('../views/smartconTables/product')));
const TestTable = Loadable(lazy(() => import('../views/smartconTables/Test')));
const EmployeetrainingreportsTable = Loadable(lazy(() => import('../views/smartconTables/Employeetrainingreports')));
const StatementofAccountsReport = Loadable(lazy(() => import('../views/Reports/StatementofAccountsReport')));
const AgingReportsTable = Loadable(lazy(() => import('../views/smartconTables/AgingReports')));
const InvoiceByMonth = Loadable(lazy(() => import('../views/smartconTables/InvoiceByMonth')));
const EmployeeSalaryReport = Loadable(lazy(() => import('../views/smartconTables/EmployeeSalaryReport')));
const PayslipGeneratedReports = Loadable(lazy(() => import('../views/smartconTables/PayslipGeneratedReports')));
const IR8AReport = Loadable(lazy(() => import('../views/smartconTables/IR8AReport')));
const Blog = Loadable(lazy(() => import('../views/smartconTables/Blog')));
const Inventory = Loadable(lazy(() => import('../views/smartconTables/Inventory')));
const Correlation = Loadable(lazy(() => import('../views/smartconTables/Correlation')));
// Details Table
const ProductDetailsTable = Loadable(lazy(() => import('../views/detailTable/ProductDetails')));
const CorrelationDetailsTable = Loadable(lazy(() => import('../views/detailTable/CorrelationDetails')));
// Finance Admin
const FinanceTable = Loadable(lazy(() => import('../views/smartconTables/Orders')));

// PayrollHR

// Admin

const Content = Loadable(lazy(() => import('../views/smartconTables/Content')));
const ISOcodesManagement = Loadable(lazy(() => import('../views/smartconTables/ISOcodesManagement')));
const GapAnalysis = Loadable(lazy(() => import('../views/smartconTables/GapAnalysis')));
const Customer = Loadable(lazy(() => import('../views/smartconTables/Customer')));
const Company = Loadable(lazy(() => import('../views/smartconTables/Company')));
const ContentDetailsTable = Loadable(lazy(() => import('../views/detailTable/ContentDetails')));
const ISOcodeDetail = Loadable(lazy(() => import('../views/detailTable/ISOcodeDetail')));
const GapAnalysisDetail = Loadable(lazy(() => import('../views/detailTable/GapAnalysisDetail')));
const CustomerDetailsTable = Loadable(lazy(() => import('../views/detailTable/CustomerDetails')));
const CompanyDetailsTable = Loadable(lazy(() => import('../views/detailTable/CompanyDetails')));
const SubCategoryTable = Loadable(lazy(() => import('../views/smartconTables/SubCategory')));
const BlogDetailsTable = Loadable(lazy(() => import('../views/detailTable/BlogDetails')));
const SupplierDetailsTable = Loadable(lazy(() => import('../views/detailTable/SupplierDetails')));


const SubCategoryDetailsTable = Loadable(
  lazy(() => import('../views/detailTable/SubCategoryDetails')),
);
const SupplierTable = Loadable(lazy(() => import('../views/smartconTables/Supplier')));
const ValuelistTable = Loadable(lazy(() => import('../views/smartconTables/Valuelist')));
const ValuelistDetailsTable = Loadable(lazy(() => import('../views/detailTable/ValuelistDetails')));
const PurchaseOrderDetailTable = Loadable(lazy(() => import('../views/detailTable/PurchaseOrderDetail')));
const SettingTable = Loadable(lazy(() => import('../views/smartconTables/Setting')));
const Section = Loadable(lazy(() => import('../views/smartconTables/Section')));
const SectionDetails = Loadable(lazy(() => import('../views/detailTable/SectionDetails')));
const SettingDetails = Loadable(lazy(() => import('../views/detailTable/SettingDetails')));
const CategoryTable = Loadable(lazy(() => import('../views/smartconTables/Category')));
const CategoryDetails = Loadable(lazy(() => import('../views/detailTable/CategoryDetails')));
const UserGroupTable = Loadable(lazy(() => import('../views/smartconTables/UserGroup')));
const UserGroupDetails = Loadable(lazy(() => import('../views/detailTable/UserGroupDetails')));
const Support = Loadable(lazy(() => import('../views/smartconTables/Support')));
const UserDetails = Loadable(lazy(() => import('../views/detailTable/UserDetails')));
const ScoreManagementDetails = Loadable(lazy(() => import('../views/detailTable/ScoreManagementDetails')));

const PurchaseOrderEdit = Loadable(lazy(() => import('../views/EditData/PurchaseOrderEdit')));
const QuestionManagement = Loadable(lazy(() => import('../views/smartconTables/QuestionManagement')));
const QuestionManagementDetails = Loadable(lazy(() => import('../views/detailTable/QuestionManagementDetails')));
//SupplierModal

const SupportDetails = Loadable(lazy(() => import('../views/detailTable/SupportDetails')));

// Table Edit's

const CorrelationEdit = Loadable(lazy(() => import('../views/EditData/CorrelationEdit')));
const ProductEdit = Loadable(lazy(() => import('../views/EditData/ProductEdit')));
const UserEdit = Loadable(lazy(() => import('../views/EditData/UserEdit')));
const ScoreManagementEdit = Loadable(lazy(() => import('../views/EditData/ScoreManagementEdit')));

const OrdersEdit = Loadable(lazy(() => import('../views/EditData/OrdersEdit')));
const ContentEdit = Loadable(lazy(() => import('../views/EditData/ContentEdit')));
const ISOcodeEdit = Loadable(lazy(() => import('../views/EditData/ISOcodeEdit')));
const GapAnalysisEdit = Loadable(lazy(() => import('../views/EditData/GapAnalysisEdit')));
const ApplicationEdit = Loadable(lazy(() => import('../views/EditData/ApplicationEdit')));
const CustomerEdit = Loadable(lazy(() => import('../views/EditData/CustomerEdit')));
const ChecklistEdit = Loadable(lazy(() => import('../views/EditData/ChecklistEdit')));
const CompanyEdit = Loadable(lazy(() => import('../views/EditData/CompanyEdit')));
const SectionEdit = Loadable(lazy(() => import('../views/EditData/SectionEdit')));
const Login = Loadable(lazy(() => import('../views/detailTable/Login')));
const ValueListEdit = Loadable(lazy(() => import('../views/EditData/ValueListEdit')));
const SubCategoryEdit = Loadable(lazy(() => import('../views/EditData/SubCategoryEdit')));
const CategoryEdit = Loadable(lazy(() => import('../views/EditData/CategoryEdit')));
const SupportEdit = Loadable(lazy(() => import('../views/EditData/SupportEdit')));
const SettingEdit = Loadable(lazy(() => import('../views/EditData/SettingEdit')));
const UserGroupEdit = Loadable(lazy(() => import('../views/EditData/UserGroupEdit')));
const BlogEdit = Loadable(lazy(() => import('../views/EditData/BlogEdit')));
const LocationEdit = Loadable(lazy(() => import('../views/EditData/LocationEdit')));
const QuestionManagementEdit = Loadable(lazy(() => import('../views/EditData/QuestionManagementEdit')));
const LocationDetailsTable = Loadable(
  lazy(() => import('../views/detailTable/LocationDetails')),
);
const ChecklistDetailsTable = Loadable(
  lazy(() => import('../views/detailTable/ChecklistDetails')),
);
const InventoryEdit = Loadable(lazy(() => import('../views/EditData/InventoryEdit')));
const SupplierEdit = Loadable(lazy(() => import('../views/EditData/SupplierEdit')));
//Reports
const ProjectReportTable = Loadable(lazy(() => import('../views/Reports/ProjectReport')));
const OverallSalesReportTable = Loadable(lazy(() => import('../views/Reports/OverAllSalesSummaryReport')));
const InvoiceByYearTable = Loadable(lazy(() => import('../views/Reports/InvoiceByYear')));
const ManageReportsTable = Loadable(lazy(() => import('../views/Reports/ManageReports')));
const GapAnalysisReportEdit = Loadable(lazy(() => import('../views/EditData/GapAnalysisReportEdit')));
// const TaskEdit= Loadable(lazy(() => import ('..')))
const PurchaseOrderTable = Loadable(lazy(() => import('../views/smartconTables/PurchaseOrder')));
const SupportNewTable = Loadable(lazy(() => import('../views/smartconTables/SupportNew')));
const Application = Loadable(lazy(() => import('../views/smartconTables/Application')));


//Reports
const CpfSummaryReports=Loadable(lazy(() => import('../views/smartconTables/CpfSummaryReports')))
const PurchaseGstReport=Loadable(lazy(() => import('../views/smartconTables/PurchaseGstReport')))
/*eslint-disable*/
const Routernew = () => {
  const { token, setToken } = UserToken();

  // if (!token) {
  //   return <LoginFormik setToken={setToken} />;
    
  // }
  return (
    <div>
      <Routes>
      <Route
            path="/signup"
            name="signup"
            element={<RegisterFormik />}
            ></Route>
             <Route
            path="/login"
            name="login"
            element={!token ? <LoginFormik/>:<Navigate to="/userdashboard"/>}
            ></Route>
            
            <Route
            path="/forgotPwd"
            name="forgotPwd"
            element={<RecoverPassword />}
            ></Route>
            <Route
            path="/reset-password"
            name="reset-password"
            element={<ResetPassword />}
            ></Route>
        <Route path="/" element={<FullLayout></FullLayout>}>
      
          {/* Tendar Modal */}
          <Route
            path="/editcostingsummary"
            name="editcostingsummary"
            element={<EditCostingSummaryModal />}
          ></Route>
          <Route path="/editquote" name="editquote" element={<EditQuoteModal />}></Route>
          <Route path="/editlineitem" name="editlineitem" element={<EditLineItemModal />}></Route>
          <Route path="/Application" name="application" element={<Application />}></Route>
          <Route path="/ApplicationList" name="application" element={<ApplicationList />}></Route>

         
          <Route
            path="/userdashboard"
            name="Dashboard"
            element={token ? <ProjectDashboard /> : <Navigate to="/login" />}
            ></Route>
          <Route
            path="/Location"
            name="locationdata"
             element={token ? <LocationTable /> : <Navigate to="/login" />}
            ></Route>
             <Route
            path="/Checklist"
            name="checklist"
             element={token ? <ChecklistTable /> : <Navigate to="/login" />}
            ></Route>
                <Route
            path="/LocationDetails"
            name="locationdata"
             element={token ? <LocationDetailsTable /> : <Navigate to="/login" />}
            ></Route>
            <Route
            path="/CorrelationDetails"
            name="correlationdata"
             element={token ? <CorrelationDetailsTable /> : <Navigate to="/login" />}
            ></Route>

<Route
            path="/ChecklistDetails"
            name="checklistdata"
             element={token ? <ChecklistDetailsTable /> : <Navigate to="/login" />}
            ></Route>
            <Route
            path="/CorrelationDetails"
            name="enquirydata"
             element={token ? <CorrelationDetailsTable /> : <Navigate to="/login" />}
            ></Route>
      {/* Table Edit's */}
       
          <Route path="/ProductEdit/:id" name="productdata"  element={token ? <ProductEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/OrdersEdit/:id" name="orderdata"  element={token ? <OrdersEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/ContentEdit/:id" name="contentdata"  element={token ? <ContentEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/ISOcodeEdit/:id" name="contentdata"  element={token ? <ISOcodeEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/GapAnalysisEdit/:id" name="contentdata"  element={token ? <GapAnalysisEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/ApplicationEdit/:id" name="contentdata"  element={token ? <ApplicationEdit /> : <Navigate to="/login" />}></Route>

          <Route path="/CustomerEdit/:id" name="customerdata"  element={token ? <CustomerEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/CompanyEdit/:id" name="customerdata"  element={token ? <CompanyEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/BlogEdit/:id" name="blogdata"  element={token ? <BlogEdit /> : <Navigate to="/login" />} ></Route>
          <Route path="/InventoryEdit/:id" name="inventorydata"  element={token ? <InventoryEdit /> : <Navigate to="/login" />}></Route>
                   <Route path="/SupplierEdit/:id" name="supplierdata"  element={token ? <SupplierEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/sectionEdit/:id" name="sectiondata"  element={token ? <SectionEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/QuestionManagementEdit/:id" name="contentdata"  element={token ? <QuestionManagementEdit /> : <Navigate to="/login" />} ></Route>
          
          <Route path="/ChecklistEdit/:id" name="checklstData"  element={token ? <ChecklistEdit /> : <Navigate to="/login" />}></Route>

          <Route path="/Login/:id" name="logindata"  element={token ? <Login /> : <Navigate to="/login" />}></Route>
          <Route path="/ValueListEdit/:id" name="valuelistdata"  element={token ? <ValueListEdit /> : <Navigate to="/login" />}></Route>
          <Route
            path="/SubCategoryEdit/:id"
            name="subcategorydata"
             element={token ? <SubCategoryEdit /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/CategoryEdit/:id" name="categorydata" element={token ? <CategoryEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/UserEdit/:id" name="staffdata"  element={token ? <UserEdit /> : <Navigate to="/login" />} ></Route>
          <Route path="/ScoreManagementEdit/:id" name="scoreManagementdata"  element={token ? <ScoreManagementEdit /> : <Navigate to="/login" />}></Route>

          <Route path="/SupportEdit/:id" name="supportdata"  element={token ? <SupportEdit /> : <Navigate to="/login" />}></Route>
          <Route path="/SettingEdit/:id" name="settingdata"  element={token ? <SettingEdit /> : <Navigate to="/login" />} ></Route>
          <Route path="/UserGroupEdit/:id" name="usergroupdata"  element={token ? <UserGroupEdit /> : <Navigate to="/login" />} ></Route>
          <Route path="/PurchaseOrder" name="purchaseorderdata"  element={token ? <PurchaseOrderTable /> : <Navigate to="/login" />} ></Route>
          <Route
            path="/LocationEdit/:id"
            name="locationeditdata"
             element={token ? <LocationEdit /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/CorrelationEdit/:id"
            name="correlationeditdata"
             element={token ? <CorrelationEdit /> : <Navigate to="/login" />}
          ></Route>

          {/* Supplier Modal */}
          
          <Route path="/pdf/:id" name="pdfData"  element={token ? <PdfData /> : <Navigate to="/login" />} ></Route>
          <Route path="/pdfnext" name="pdfData"  element={token ? <PdfNext /> : <Navigate to="/login" />} ></Route>
          <Route path="/TicketsComponent" name="pdfData"  element={token ? <TicketsComponent /> : <Navigate to="/login" />} ></Route>
           <Route path="/"  element={token ? <Classic /> : <Navigate to="/login" />} />
          <Route path="/dashboards/crypto" name="Classic"  element={token ? <Crypto /> : <Navigate to="/login" />}></Route>
          <Route path="/dashboards/ecommerce" name="ecommerce"  element={token ? <Ecommerce /> : <Navigate to="/login" />}></Route>
          <Route path="/dashboards/general" name="general"  element={token ? <General /> : <Navigate to="/login" />}></Route>
          <Route path="/dashboards/extra" name="extra"  element={token ? <Extra /> : <Navigate to="/login" />}></Route>
          <Route path="/about" name="about"  element={token ? <About /> : <Navigate to="/login" />}></Route>
          <Route path="/apps/notes" name="notes"  element={token ? <Notes /> : <Navigate to="/login" />}></Route>
          <Route path="/apps/chat" name="chat"  element={token ? <Chat /> : <Navigate to="/login" />}></Route>
          <Route path="/apps/contacts" name="contacts"  element={token ? <Contacts /> : <Navigate to="/login" />}></Route>
          <Route path="/apps/calendar" name="calendar"  element={token ? <Calendar /> : <Navigate to="/login" />}></Route>
          <Route path="/apps/email" name="email"  element={token ? <Email /> : <Navigate to="/login" />} ></Route>
          <Route path="/ecom/shop" name="email"  element={token ? <Shop /> : <Navigate to="/login" />}></Route>
          <Route path="/ecom/shopdetail" name="email"  element={token ? <ShopDetail /> : <Navigate to="/login" />}></Route>
          <Route path="/tickt/ticket-list" name="ticket list"  element={token ? <TicketList /> : <Navigate to="/login" />} ></Route>
       
          <Route
            path="/tickt/ticket-detail"
            name="ticket detail"
             element={token ? <TicketDetail /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/apps/treeview" name="email"  element={token ? <Treeview /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/alerts" name="alerts"  element={token ? <Alerts /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/badges" name="badges"  element={token ? <Badges /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/buttons" name="buttons"  element={token ? <Buttons /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/cards" name="cards"  element={token ? <Cards /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/grid" name="grid"  element={token ? <Grid /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/table" name="table"  element={token ? <Tables /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/forms" name="forms"  element={token ? <Forms /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/breadcrumbs" name="breadcrumbs"  element={token ? <Breadcrumbs /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/dropdown" name="dropdown"  element={token ? <Dropdowns /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/button-group" name="button group"  element={token ? <BtnGroup /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/collapse" name="collapse"  element={token ? <Collapse /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/list-group" name="list-group"  element={token ? <ListGroup /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/modal" name="modal"  element={token ? <Modal /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/navbar" name="navbar"  element={token ? <Navbar /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/nav" name="nav"  element={token ? <Nav /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/pagination" name="pagination"  element={token ? <Pagination /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/popover" name="popover"  element={token ? <Popover /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/progress" name="progress"  element={token ? <Progress /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/spinner" name="spinner"  element={token ? <Spinner /> : <Navigate to="/login" />}></Route>
          <Route path="/ui/tabs" name="tabs"  element={token ? <Tabs /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/toasts" name="toasts"  element={token ? <Toasts /> : <Navigate to="/login" />} ></Route>
          <Route path="/ui/tooltip" name="tooltip"  element={token ? <Tooltip /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-layout/form-basic" name="form-basic"  element={token ? <FormBasic /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-layout/form-grid" name="form-grid"  element={token ? <FormGrid /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-layout/form-group" name="form-group"  element={token ? <FormGroup /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-layout/form-input" name="form-input"  element={token ? <FormInput /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-pickers/datepicker" name="datepicker"  element={token ? <Datepicker /> : <Navigate to="/login" />} />
          <Route path="/form-pickers/tag-select" name="tag-select"  element={token ? <TagSelect /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-validation" name="form-validation"  element={token ? <FormValidate /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-steps" name="form-steps"  element={token ? <FormSteps /> : <Navigate to="/login" />} ></Route>
          <Route path="/form-editor" name="form-editor"  element={token ? <FormEditor /> : <Navigate to="/login" />} ></Route>

          <Route path="/tables/basic-table" name="basic-table"  element={token ? <Basictable /> : <Navigate to="/login" />}></Route>
          <Route path="/tables/react-table" name="react-table"  element={token ? <CustomReactTable /> : <Navigate to="/login" />} />
          <Route path="/tables/data-table" name="data-table"  element={token ? <ReactBootstrapTable /> : <Navigate to="/login" />}  />
          <Route path="/charts/apex" name="apex"  element={token ? <ApexCharts /> : <Navigate to="/login" />} ></Route>
          <Route path="/charts/chartjs" name="chartjs"  element={token ? <ChartJs /> : <Navigate to="/login" />}></Route>
          <Route path="/sample-pages/profile" name="profile"  element={token ? <Profile /> : <Navigate to="/login" />}></Route>
          <Route path="/sample-pages/helper-class" name="helper-class"  element={token ? <HelperClass /> : <Navigate to="/login" />} />
          <Route path="/sample-pages/starterkit" name="starterkit"  element={token ? <StarterKit /> : <Navigate to="/login" />} />
          <Route path="/sample-pages/gallery" name="gallery"  element={token ? <Gallery /> : <Navigate to="/login" />}></Route>
          <Route
            path="/sample-pages/search-result"
            name="search-result"
             element={token ? <SearchResult /> : <Navigate to="/login" />}
          />
          <Route path="/icons/bootstrap" name="bootstrap"  element={token ? <Bootstrap /> : <Navigate to="/login" />}></Route>
          <Route path="/icons/feather" name="feather"  element={token ? <Feather /> : <Navigate to="/login" />} ></Route>
          <Route path="/map/vector" name="vector"  element={token ? <CustomVectorMap /> : <Navigate to="/login" />} ></Route>
          <Route path="/widget" name="widget"  element={token ? <Widget /> : <Navigate to="/login" />} ></Route>
          <Route path="/casl" name="casl"  element={token ? <CASL /> : <Navigate to="/login" />} ></Route>
          <Route path="/auth/404" name="404"  element={token ? <Error /> : <Navigate to="/login" />} ></Route>
          <Route path="/projects/addproject" name="addproject"  element={token ? <AddProjects /> : <Navigate to="/login" />} ></Route>
          <Route
            path="/projects/editproject/:id"
            name="editproject"
             element={token ? <EditProject /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/projects/projectreport" name="projectreport"  element={token ? <Reports /> : <Navigate to="/login" />} ></Route>
          <Route path="/OverAllSalesSummaryReport" name="overallsummarydata"  element={token ? <OverallSalesReportTable /> : <Navigate to="/login" />}></Route>
          <Route path="/InvoiceByYear" name="invoicebyeardata"  element={token ? <InvoiceByYearTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/ManageReports" name="ManageReports"  element={token ? <ManageReportsTable /> : <Navigate to="/login" />}></Route>
          <Route path="/GapAnalysisReportEdit/:id" name="GapAnalysisReportEdit"  element={token ? <GapAnalysisReportEdit /> : <Navigate to="/login" />}></Route>
         
          {/* Tender */}
          <Route path="/BlogDetails" name="blogDetaildata"  element={token ? <BlogDetailsTable /> : <Navigate to="/login" />}></Route>
          <Route path="/SupplierDetails" name="supplierDetaildata"  element={token ? <SupplierDetailsTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/Task" name="taskdata"  element={token ? <TaskTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/User" name="staffdata"  element={token ? <UserTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/ScoreManagement" name="scoreManagementdata"  element={token ? <ScoreManagementTable /> : <Navigate to="/login" />} ></Route>

          <Route path="/ProductDetails" name="productDetaildata"  element={token ? <ProductDetailsTable /> : <Navigate to="/login" />}></Route>
          <Route path="/UserDetails" name="staffDetaildata"  element={token ? <UserDetails /> : <Navigate to="/login" />} ></Route>
          <Route path="/ScoreManagementDetails" name="scoreManagementDetaildata"  element={token ? <ScoreManagementDetails /> : <Navigate to="/login" />} ></Route>
          <Route path="/Correlation" name="correlationdata"  element={token ? <Correlation /> : <Navigate to="/login" />} ></Route>
          <Route path="/Product" name="productdata"  element={token ? <ProductTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/Orders" name="ordersdata"  element={token ? <FinanceTable /> : <Navigate to="/login" />}> </Route>
          <Route
            path="/PurchaseOrderEdit/:id"
            name="purchaseorderdata"
             element={token ? <PurchaseOrderEdit /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/Blog" name="blogdata"  element={token ? <Blog /> : <Navigate to="/login" />}></Route>
          <Route path="/Inventory" name="inventorydata"  element={token ? <Inventory /> : <Navigate to="/login" />}></Route>
          <Route path="/SubCategory" name="subcategorydata"  element={token ? <SubCategoryTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/ProjectReport" name="projectdata"  element={token ? <ProjectReportTable /> : <Navigate to="/login" />} ></Route>
          <Route
            path="/SubCategoryDetails"
            name="subcategorydetailsdata"
             element={token ? <SubCategoryDetailsTable /> : <Navigate to="/login" />}
          ></Route>

          <Route path="/Valuelist" name="valuelistdata"  element={token ? <ValuelistTable /> : <Navigate to="/login" />}></Route>
          <Route
            path="/ValuelistDetails"
            name="valuelistdetailsdata"
             element={token ? <ValuelistDetailsTable /> : <Navigate to="/login" />} 
          ></Route>
             <Route
            path="/PurchaseOrderDetail"
            name="purchaseorderdetaildata"
             element={token ? <PurchaseOrderDetailTable /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/Section" name="sectiondata"  element={token ? <Section /> : <Navigate to="/login" />}></Route>
          <Route path="/SectionDetails" name="sectiondetaildata"  element={token ? <SectionDetails /> : <Navigate to="/login" />}></Route>
          <Route path="/Setting" name="settingdata"  element={token ? <SettingTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/SettingDetails" name="settingdetaildata"  element={token ? <SettingDetails /> : <Navigate to="/login" />} ></Route>
          <Route path="/Category" name="categorydata"  element={token ? <CategoryTable /> : <Navigate to="/login" />}></Route>
          <Route path="/CategoryDetails" name="categorydetailsdata"  element={token ? <CategoryDetails /> : <Navigate to="/login" />}></Route>
          <Route path="/UserGroup" name="usergroupdata"  element={token ? <UserGroupTable /> : <Navigate to="/login" />}></Route>
          <Route path="/UserGroupDetails" name="usergroupdetailsdata"  element={token ? <UserGroupDetails /> : <Navigate to="/login" />}></Route>
        
          <Route path="/Content" name="contentdata"  element={token ? <Content /> : <Navigate to="/login" />}></Route>
          <Route path="/ISOCodes" name="contentdata"  element={token ? <ISOcodesManagement /> : <Navigate to="/login" />}></Route>
          <Route path="/GapAnalysis" name="contentdata"  element={token ? <GapAnalysis /> : <Navigate to="/login" />}></Route>
          <Route path="/Customer" name="customerdata"  element={token ? <Customer /> : <Navigate to="/login" />} ></Route>
          <Route path="/Company" name="customerdata"  element={token ? <Company /> : <Navigate to="/login" />} ></Route>
          <Route
            path="/ContentDetails"
            name="contentdetailsdata"
             element={token ? <ContentDetailsTable /> : <Navigate to="/login" />} 
          ></Route>
          <Route
            path="/ISOcodeDetail"
            name="detailsdata"
             element={token ? <ISOcodeDetail /> : <Navigate to="/login" />}
          ></Route>
           <Route
            path="/GapAnalysisDetail"
            name="detailsdata"
             element={token ? <GapAnalysisDetail /> : <Navigate to="/login" />}
          ></Route>
           <Route
            path="/CustomerDetails"
            name="customerdetailsdata"
             element={token ? <CustomerDetailsTable /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/CompanyDetails"
            name="companydetailsdata"
             element={token ? <CompanyDetailsTable /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/test" name="testdata"  element={token ? <TestTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/Support" name="supportdata"  element={token ? <Support /> : <Navigate to="/login" />} ></Route>
          <Route path="/SupportNew" name="supportnewdata"  element={token ? <SupportNewTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/SupportDetails" name="supportdetailsdata"  element={token ? <SupportDetails /> : <Navigate to="/login" />} ></Route>
        
          <Route path="/Employeetrainingreports" name="employeetrainingreportdata"  element={token ? <EmployeetrainingreportsTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/StatementofAccountsReport" name="statementofAccountsreportdata"  element={token ? <StatementofAccountsReport /> : <Navigate to="/login" />} ></Route>
          <Route path="/AgingReports" name="agingReportdata"  element={token ? <AgingReportsTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/CpfSummaryreports" name="cpfsummaryreportdata"  element={token ? <CpfSummaryReports /> : <Navigate to="/login" />}></Route>
          <Route path="/InvoiceByMonth" name="invoicemonthdata"  element={token ? <InvoiceByMonth /> : <Navigate to="/login" />} ></Route>
          <Route path="/EmployeeSalaryReport" name="employeesalarydata"  element={token ? <EmployeeSalaryReport /> : <Navigate to="/login" />}></Route>
          <Route path="/PayslipGeneratedReports" name="payslipdata"  element={token ? <PayslipGeneratedReports /> : <Navigate to="/login" />} ></Route>
          <Route path="/IR8AReport" name="ir8areportdata"  element={token ? <IR8AReport /> : <Navigate to="/login" />} ></Route>
          <Route path="/PurchaseGstReport" name="purchasegstreportdata"  element={token ? <PurchaseGstReport /> : <Navigate to="/login" />} ></Route>
          <Route path="/Supplier" name="supplierdata"  element={token ? <SupplierTable /> : <Navigate to="/login" />} ></Route>
          <Route path="/QuestionManagement" name="questionmanagementdata"  element={token ? <QuestionManagement /> : <Navigate to="/login" />} ></Route>
          <Route path="/QuestionManagementDetails" name="questionmanagementdata"  element={token ? <QuestionManagementDetails /> : <Navigate to="/login" />} ></Route>
        </Route>

        
      </Routes>
    </div>
  );
};

export default Routernew;
