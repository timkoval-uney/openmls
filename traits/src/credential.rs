//! # OpenMLS Credentials
//!
//! The MLS spec does not define credentials very well.
//! The MLS protocol only interacts with the credential public keys and requires
//! signatures from a corresponding private key.
//!
//! OpenMLS defines a trait for credentials in order to get a unique identity
//! from it and the public key.

use crate::types::{credential::Credential, Error, SignatureScheme};

pub trait OpenMlsCredential // TryFrom<(Credential, Vec<u8>, SignatureScheme), Error = Error>
{
    fn try_from(
        credential: Credential,
        public_key: Vec<u8>,
        signature_scheme: SignatureScheme,
    ) -> Result<Self, Error>
    where
        Self: Sized;

    /// Get the identity of this credential.
    fn identity(&self) -> &[u8];

    /// Get the public key of this credential.
    fn public_key(&self) -> &[u8];

    /// Get the [`Credential`] for this object
    fn credential(&self) -> Credential;
}
