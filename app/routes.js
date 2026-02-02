//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/', function (req,res) {
    res.render('index', { page: 'about' })
})

router.get('/blog', function (req,res) {
    res.render('index', { page: 'blog' })
})

router.get('/chat', function (req,res) {
    res.render('index', { page: 'chat' })
})

router.get('/resources', function (req,res) {
    res.render('index', { page: 'resources' })
})

router.get('/links', function (req,res) {
    res.render('index', { page: 'links' })
})