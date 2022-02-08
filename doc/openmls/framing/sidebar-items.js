initSidebarItems({"enum":[["ProcessedMessage","Message that contains messages that are syntactically and semantically correct. [StagedCommit] and [QueuedProposal] can be inspected for authorization purposes."],["SenderType","All possible sender types according to the MLS protocol spec."],["SenderValue","Sender types with values for some variants."],["UnverifiedContextMessage","Contains an [VerifiableMlsPlaintext] and a [Credential] if it is a message from a `Member` or a `NewMember`.  It sets the serialized group context and verifies the membership tag for member messages.  It can be converted to a verified message by verifying the signature, either with the credential or an external signature key."],["WireFormat","Wire format of MLS messages."]],"struct":[["ApplicationMessage","Application message received through a [ProcessedMessage]."],["DecryptedMessage","Intermediate message that can be constructed either from a plaintext message or from ciphertext message. If it it constructed from a ciphertext message, the ciphertext message is decrypted first. This function implements the following checks:"],["MlsMessageIn","Unified message type for incoming MLS messages."],["MlsMessageOut","Unified message type for outgoing MLS messages."],["Sender","The sender of an MLS message."],["UnverifiedGroupMessage","Part of [UnverifiedContextMessage]."],["UnverifiedMessage","Partially checked and potentially decrypted message. Use this to inspect the [Credential] of the message sender and the optional `aad` if the original message was an [MlsCiphertext]."],["UnverifiedPreconfiguredMessage","Part of [UnverifiedContextMessage]."],["VerifiedExternalMessage","External message, where all semantic checks on the framing have been successfully performed. Note: External messages are not fully supported yet #106"],["VerifiedMemberMessage","Member message, where all semantic checks on the framing have been successfully performed."]]});