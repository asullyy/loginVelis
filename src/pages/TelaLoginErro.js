import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TelaLoginErro.module.css";
const TelaLoginErro = () => {
  const navigate = useNavigate();

  const onEsqueceuSenhaContainerClick = useCallback(() => {
    navigate("/recuperaosenha");
  }, [navigate]);

  return (
    <div className={styles.telaLoginErro}>
      <div className={styles.plataformaDeForaContainer}>
        <p className={styles.plataformaDe}>{`Plataforma de `}</p>
        <p className={styles.plataformaDe}>
          <span className={styles.foraDeVendas}>Força de Vendas completa</span>
          <span>{` para `}</span>
        </p>
        <p className={styles.plataformaDe}>{`você e seu negócio `}</p>
      </div>
      <div className={styles.vVelisOriginal}>
        <div className={styles.vVelisOriginalChild} />
        <div className={styles.vVelisOriginalItem} />
      </div>
      <div className={styles.login}>
        <div className={styles.btnGoogleParent}>
          <div className={styles.btnGoogle}>
            <div className={styles.google}>google</div>
            <img className={styles.googleIcon} alt="" src="/google.svg" />
          </div>
          <div className={styles.btnMicrosoft}>
            <div className={styles.microsoft}>microsoft</div>
            <img className={styles.microsoftIcon} alt="" src="/microsoft.svg" />
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.ouAcesseCom}>ou acesse com</div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.btnLogin}>
          <div className={styles.acessar}>Acessar</div>
        </div>
        <div className={styles.boxLembrarmimParent}>
          <div className={styles.boxLembrarmim}>
            <div className={styles.checkboxes}>
              <div className={styles.stateLayer}>
                <div className={styles.container} />
                <img
                  className={styles.iconscheckSmall}
                  alt=""
                  src="/iconscheck-small.svg"
                />
              </div>
            </div>
            <div className={styles.lembrarDeMim}>Lembrar de mim</div>
          </div>
          <div
            className={styles.esqueceuSenha}
            onClick={onEsqueceuSenhaContainerClick}
          >
            <div className={styles.esqueceuASenha}>Esqueceu a senha?</div>
          </div>
        </div>
        <div className={styles.textField}>
          <div className={styles.textField1}>
            <div className={styles.stateLayer1}>
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1} />
                </div>
                <div className={styles.labelText}>
                  <div className={styles.labelText1}>Usuário</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.textField2}>
          <div className={styles.textField1}>
            <div className={styles.stateLayer2}>
              <div className={styles.content}>
                <div className={styles.inputText}>
                  <div className={styles.inputText1} />
                </div>
                <div className={styles.labelText}>
                  <div className={styles.labelText1}>Senha</div>
                </div>
              </div>
              <div className={styles.trailingIcon}>
                <div className={styles.container1}>
                  <div className={styles.stateLayer3}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <img
          className={styles.logoHorizontalCorTagIcon}
          alt=""
          src="/logohorizontalcortag@2x.png"
        />
        <div className={styles.vVelisOriginal1}>
          <div className={styles.vVelisOriginalInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.plataformaDeParent}>
            <div className={styles.plataformaDe1}>
              <p className={styles.plataformaDe}>{`Plataforma de `}</p>
            </div>
            <div className={styles.para}>para</div>
            <div className={styles.vocESeu1}>você e seu negócio</div>
            <b className={styles.foraDeVendas1}>Força de Vendas</b>
            <b className={styles.completa}>completa</b>
          </div>
        </div>
        <div className={styles.verifiqueSeOsContainer}>
          <p className={styles.plataformaDe}>
            Verifique se os campos de usuário e senha estão corretos
          </p>
          <p className={styles.plataformaDe}>2 tentativas de login restantes</p>
        </div>
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default TelaLoginErro;
