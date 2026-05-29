import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { collection, addDoc } from "firebase/firestore";
import { db } from "./src/config/firebase";

export default function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function salvarContato() {
    try {
      await addDoc(collection(db, "contatos"), {
        nome,
        telefone,
      });

      setMensagem("Contato cadastrado com sucesso!");
      setNome("");
      setTelefone("");
    } catch (error) {
      setMensagem("Erro ao cadastrar contato.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda de Contatos</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />

      {mensagem !== "" && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}

      <Button title="Salvar Contato" onPress={salvarContato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  mensagem: {
    backgroundColor: "#d4edda",
    color: "#155724",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});