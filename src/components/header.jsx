export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro' style={{backgroundImage:'url(https://distanceeducationschool.com/wp-content/uploads/2022/03/LPU-image-for-page.jpg)'}}>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <button
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Book Your Room
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
