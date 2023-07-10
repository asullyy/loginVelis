import { useState, useCallback } from "react";
import {
  Button,
  Icon,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TelaLogin.module.css";
const TelaLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onEsqueceuSenhaClick = useCallback(() => {
    navigate("/recuperaosenha");
  }, [navigate]);

  return (
    <div className={styles.telaLogin}>
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
          <Button
            className={styles.btnGoogle}
            sx={{ width: 200 }}
            variant="outlined"
            color="primary"
            startIcon={<Icon>alarm_sharp</Icon>}
          >
            google
          </Button>
          <Button
            className={styles.btnGoogle}
            sx={{ width: 200 }}
            variant="outlined"
            color="primary"
            startIcon={<Icon>alarm_sharp</Icon>}
          >
            microsoft
          </Button>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.ouAcesseCom}>ou acesse com</div>
          <div className={styles.frameChild} />
        </div>
        <Button
          className={styles.component}
          sx={{ width: 468 }}
          variant="contained"
          color="secondary"
        >
          Acessar
        </Button>
        <div className={styles.checkListParent}>
          <FormControlLabel
            className={styles.btnGoogle}
            label="Lembrar de mim"
            labelPlacement="end"
            control={<Checkbox color="secondary" size="medium" />}
          />
          <Link
            className={styles.esqueceuSenha}
            to="/recuperaosenha"
            onClick={onEsqueceuSenhaClick}
          >
            <div className={styles.esqueceuASenha}>Esqueceu a senha?</div>
          </Link>
        </div>
        <TextField
          className={styles.usuario}
          sx={{ width: 468 }}
          color="secondary"
          variant="outlined"
          type="email"
          label="Usuário"
          placeholder="Insira seu email"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.senha}
          sx={{ width: 468 }}
          color="secondary"
          variant="outlined"
          type={showPassword ? "text" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Senha"
          placeholder="Insira sua senha"
          size="medium"
          margin="none"
        />
        <img
          className={styles.logoHorizontalCorTagIcon}
          alt=""
          src="/logohorizontalcortag@2x.png"
        />
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default TelaLogin;
