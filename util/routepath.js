const sc = '/service/common/';
const post = 'post/'
module.exports = {
    //DBURI:"mongodb://Sutirtha-Marjit:punisepaku#@1234@ds163689.mlab.com:63689/dbwebapprunner",
    DBURI:"mongodb://Sutirtha-Marjit:punisepaku#@1234@ds163689.mlab.com:63689/dbwebapprunner",
    ADMIN:'/admin',
    CREATE_FOLDER:`${sc}createfolder`,
    DESTROY_ALL_FOLDER:`${sc}destroyfolders/massivecollapse/:id`,
    REGISTER:`${sc}${post}register`

}