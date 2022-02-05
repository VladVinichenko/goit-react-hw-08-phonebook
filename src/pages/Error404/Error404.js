import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Section from '../../components/Section/Section'
import s from './Error404.module.css'
import { ROUTERS } from '../../consts'
import Image from 'react-image-webp';

export function Error404() {
  return (
    <Fragment>
      <Section>
        <div className={s.box}>
          {/* <h1 className={s.title}>Error 404</h1>
          <p className={s.text}>Page Not Found..</p> */}
          <Image className={s.image}
            // src={require('./path/to/image')}
            webp={require('../../images/error404.webp')}
          />
          <NavLink to={ROUTERS.HOME}>
            <p className={s.link}>Go to homepage!</p>
          </NavLink>
        </div>
      </Section>
    </Fragment >
  )
}

