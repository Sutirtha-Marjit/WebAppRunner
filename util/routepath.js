const sc = '/service/common/';
const post = 'post/'
module.exports = {
    //DBURI:"mongodb://Sutirtha-Marjit:punisepaku#@1234@ds163689.mlab.com:63689/dbwebapprunner",
    DBURI:"mongodb://Sutirtha-Marjit:punisepaku#@1234@ds163689.mlab.com:63689/dbwebapprunner",
    ADMIN:'/admin',
    CREATE_PROJECT:`${sc}${post}createnewproject`,
    CREATE_FOLDER:`${sc}createfolder`,
    DESTROY_ALL_FOLDER:`${sc}destroyfolders/massivecollapse/:id`,
    GETRESOURCES:`${sc}${post}users/`,
    FILEUPLOAD:`${sc}${post}fileupload/:dest`,
    REGISTER:`${sc}${post}register`,
    PROJECT_UPLOAD_PATH:'./application-sites'

}