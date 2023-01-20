import React, { useContext, useEffect } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const About = () => {
  const { alert, hide } = useContext(AlertContext)

  useEffect(() => {
    if (alert) hide()
  })

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Информация</h1>
        <p className="lead">Версия приложения: 1.0.0</p>
      </div>
    </div>
  )
}
